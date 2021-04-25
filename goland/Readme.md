1. Executar o Aplicativo GO

    docker run michelgsoares/codeeducation

    Se a imagem não mais existir no Docker Hub:

    a. Gerar a imagem: 
    
        a. entrar no diretorio goland:

            cd goland
            
        b. Gerar a imagem:

            docker build -t michelgsoares/codeeducation . -f .\Dockerfile.prod
            