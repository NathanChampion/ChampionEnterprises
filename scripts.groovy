def Build() {
    echo 'Building docker image...'
    // If authentication issues arise, make sure the default .npmrc does not exist
    // rm /var/jenkins_home/.npmrc
    // Space is limited so pruning makes sure we don't run out
    sh 'docker system prune --force'
    sh 'docker build -t blue-print:v`cat version.tmp` .'
}

def RunTests() {
    echo 'Running component tests...'
    sh 'npm test'
}

def Deploy() {
    echo 'Deploying application...'
    sh 'docker tag blue-print:v`cat version.tmp` rdinfra-docker-prod.artifactory.metro.ad.selinc.com/blue-print:v`cat version.tmp`'
    sh 'docker login -u ${USER} -p ${PASSWORD} rdinfra-docker-prod.artifactory.metro.ad.selinc.com'
    sh 'docker push rdinfra-docker-prod.artifactory.metro.ad.selinc.com/blue-print:v`cat version.tmp`'
    // Publish app
    // You'll need to download the rancher binary and put it in /usr/local/bin/jenkins/
    sh '/usr/local/bin/jenkins/rancher login https://rancher2.ad.selinc.com --token $TOKEN --context c-7rmt8:p-hbbvq'
    sh '/usr/local/bin/jenkins/rancher kubectl set image deployments.v1.apps/blueprint --namespace epdm blueprint=rdinfra-docker-prod.artifactory.metro.ad.selinc.com/blue-print:v`cat version.tmp`'
}

return this