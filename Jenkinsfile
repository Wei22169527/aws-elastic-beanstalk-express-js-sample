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

    stage('Install Dependencies') {
        steps {
            sh 'npm ci'
        }
    }

    stage('Run Tests') {
        steps {
            sh 'npm test'
        }
    }
    stage('Security Scan') {
    steps {
        sh 'npm audit --audit-level=high'
    }
}
    }
}