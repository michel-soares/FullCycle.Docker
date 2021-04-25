Build

    docker build -t michelgsoares/go-dvlp . -f .\Dockerfile.dvlp

Rodar o container goland dvlp
    
    docker run  -d -it --name go-dvlp -v E:\FullCycle\aulas\docker\goland:/usr/src/app michelgsoares/go-dvlp 

Entrar

    docker exec -it go-dvlp bash