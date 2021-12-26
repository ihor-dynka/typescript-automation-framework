pipeline {
    agent any
    
    tools {nodejs 'node'}
    
    environment {
        ENVIRONMENT = 'qa'
        API_BASE_URL='https://petstore.swagger.io'
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
        stage('Checkout Git repository') {
           steps {
                git branch: 'Create_Jenkins_File_for_PR_debug_build', url: 'https://git.epam.com/ihor_dynka/ts-automation-framework.git', credentialsId: 'gitlab'
            }
        }
        stage ('Build') {
            steps {
                sh 'npm install'
                sh 'npm run apiTest'
            }
        }
    }

    post {
      always {
        junit {
            testResults: '**/test-results.xml'
        }
      }
   } 
}