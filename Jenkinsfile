updateGitlabCommitStatus state: 'pending'

pipeline {
    agent any

    options {
        gitLabConnection('gitlab')
    }
    
    tools {nodejs 'node'}
    
    environment {
        ENVIRONMENT = 'qa'
        BROWSER = 'chrome'
        IMPLICIT_WAIT = '10000'
        REMOTE_BROWSER_ENABLE = 'false'
        LOCAL_CHROME_DRIVER_BASE_PATH = '/'
        LOCAL_CHROME_DRIVER_PORT = '9515'
        BROWSER_VERSION = '95.0'
        REMOTE_BROWSER_HOST = 'localhost'
        REMOTE_BROWSER_BASE_PATH = '/wd/hub'
        REMOTE_BROWSER_PORT = '4444'
        SELENOID_ENABLE_VIDEO = 'false'
        SELENOID_ENABLE_LOGS = 'false'
        SELENOID_ENABLE_VNC = 'false'
    }
    
    stages {
        stage ('Build API Test Image') {
            steps {
                sh 'docker build . -t api_test_${BUILD_NUMBER}'
            }
        }

        stage ('Run API Test') {
            steps {
                sh 'docker run test --name api_test_${BUILD_NUMBER}'
            }
        }
    }

    post {
      always {
          stage ('Remove container and image') {
              sh 'docker rm api_test_${BUILD_NUMBER}'
              sh 'docker rmi api_test_${BUILD_NUMBER}'
          }
          
        junit (
            allowEmptyResults: true,
            testResults: '**/test-results.xml',
            skipPublishingChecks: true
        )
      }
   } 
}
