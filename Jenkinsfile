// Copyright © 2024 Champion Estates LLC
def scripts
def FAILED_STAGE

pipeline {
    agent any

    stages {        
        stage("Init") {
            steps {
                echo 'Loading scripts..'
                script {
                    FAILED_STAGE=STAGE_NAME
                    sh 'grep \'\"version\' package.json | cut -d \'"\' -f4 | tr \'\\n\' \'\\0\' > version.tmp'
                    scripts = load "scripts.groovy" 
                }
            }
        }

        stage("Build") {
            steps {
                script {
                    FAILED_STAGE=STAGE_NAME
                    scripts.Build()
                }
            }
        }
        
        stage("Deploy") {
            when {
                expression {
                    BRANCH_NAME == 'release'
                }
            }
            steps {
                withCredentials([
                    usernamePassword(credentialsId: 'artifactory-service-account', usernameVariable: 'USER', passwordVariable: 'PASSWORD'),
                    string(credentialsId: 'rancher-token', variable: 'TOKEN')
                ]) {
                    script {
                        FAILED_STAGE=STAGE_NAME
                        scripts.Deploy()
                    }
                }
            }
        }
    }

    post {
        always {
            sh 'rm version.tmp'
        }
        success {
            script {
                if(BRANCH_NAME == 'release') {
                    mail bcc: '', body: "Jenkins deployment succeeded for Blue Print", cc: '', charset: 'UTF-8', from: 'jenkins-rdinfra@selinc.com', mimeType: 'text/html', replyTo: '', subject: "Jenkins deployment success", to: "Infrastructure_Systems_Software@selinc.com";  
                }
            }
        }
        failure {
            script {
                if(BRANCH_NAME == 'release') {
                    mail bcc: '', body: "Jenkins deployment failed on stage: ${FAILED_STAGE} for Blue Print", cc: '', charset: 'UTF-8', from: 'jenkins-rdinfra@selinc.com', mimeType: 'text/html', replyTo: '', subject: "Jenkins deployment failure", to: "Infrastructure_Systems_Software@selinc.com";  
                }
            }
        }
    }
}