pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }

    stages {
        stage('Verify Environment') {
            steps {
                sh 'node --version'
            }
        }
    }
}