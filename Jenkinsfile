pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh 'mvn clean verify sonar:sonar'
                }
            }
        }
        
    stages {
        stage('Build') {
            steps {
                // Build your application (e.g., compile code, create artifacts)
                sh 'npm install' // Install dependencies
                sh 'npm run build' // Build your frontend (if applicable)
                sh 'mvn clean package' // Build your backend (Java, etc.)
            }
        }
            stage('Deploy to NGINX') {
    steps {
        // Assuming NGINX is running locally on your VM
        sh 'sudo cp -r target/* /path/to/nginx/html' // Copy artifacts
        sh 'sudo systemctl reload nginx' // Restart NGINX
    }
}

        
        post {
    always {
        emailext body: 'Code quality report attached.', subject: 'Code Quality Report', to: 'prajwalyavalker83320@gmail.com'
    }
}

    }
}
