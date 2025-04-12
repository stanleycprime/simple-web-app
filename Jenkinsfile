pipeline {
  agent any

  stages {
    stage('Clone Repository') {
      steps {
        git 'https://github.com/stanleycprime/simple-web-app.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t simple-web-app .'
      }
    }

    stage('Run Docker Container') {
      steps {
        sh 'docker stop web || true'
        sh 'docker rm web || true'
        sh 'docker run -d --name web -p 8081:80 simple-web-app'
      }
    }
  }
}

