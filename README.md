# API Integration Project

Este projeto integra a Meta Cloud API com a DeepSeek API usando TypeScript e Docker.

## Estrutura do Projeto

```
api-integration-project
├── src
│   ├── meta
│   │   └── metaApi.ts       # Implementação para interagir com a Meta Cloud API
│   ├── deepseek
│   │   └── deepseekApi.ts    # Implementação para integrar com a DeepSeek API
│   ├── whatsapp
│   │   └── whatsappApi.ts    # Implementação para integrar com a API do WhatsApp
│   └── index.ts              # Ponto de entrada para a aplicação
│   └── server.ts             # Servidor Express para receber webhooks do WhatsApp
├── Dockerfile                 # Dockerfile para construir a imagem Docker
├── docker-compose.yml         # Configuração do Docker Compose para os serviços
├── package.json               # Arquivo de configuração do npm com dependências
├── tsconfig.json             # Arquivo de configuração do TypeScript
└── README.md                  # Documentação do projeto
```

## Instruções de Configuração

1. **Clone o repositório:**
   ```bash
   git clone <repository-url>
   cd api-integration-project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Construa a imagem Docker:**
   ```bash
   docker build -t api-integration-project .
   ```

4. **Execute a aplicação usando Docker Compose:**
   ```bash
   docker-compose up
   ```

## Instruções de Instalação do Docker e Docker Compose

### Instalação do Docker

1. **Atualize o índice de pacotes:**
   ```bash
   sudo apt update
   ```

2. **Instale os pacotes necessários:**
   ```bash
   sudo apt install apt-transport-https ca-certificates curl software-properties-common
   ```

3. **Adicione a chave GPG do Docker:**
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
   ```

4. **Adicione o repositório Docker:**
   ```bash
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. **Instale o Docker:**
   ```bash
   sudo apt update
   sudo apt install docker-ce
   ```

6. **Verifique a instalação do Docker:**
   ```bash
   sudo systemctl status docker
   ```

### Instalação do Docker Compose

1. **Baixe a versão mais recente do Docker Compose:**
   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. **Aplique permissões executáveis ao binário:**
   ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. **Verifique a instalação do Docker Compose:**
   ```bash
   docker-compose --version
   ```

## Uso

- A aplicação inicializa instâncias de `MetaApi` e `DeepSeekApi` para lidar com solicitações e respostas de API.
- Você pode modificar os arquivos de origem no diretório `src` para personalizar a integração conforme necessário.

## Documentação da API

- **Meta Cloud API**: Consulte a documentação oficial da Meta para detalhes sobre endpoints, autenticação e uso.
- **DeepSeek API**: Verifique a documentação da DeepSeek API para informações sobre capacidades de busca e manipulação de resultados.

## Configuração do Bot do WhatsApp
1. **Obtenha as credenciais da API do WhatsApp:**
 Configure a API do WhatsApp usando um serviço como Twilio e obtenha o Account SID e o Auth Token.

2. **Configure o Webhook no Twilio:**
Configure o webhook para o número de WhatsApp que você configurou. Defina a URL do webhook para apontar para o endpoint /webhook do seu servidor Express.
1. **Atualize as credenciais no arquivo whatsappApi.ts:** 
Substitua your_account_sid e your_auth_token pelas suas credenciais do Twilio.

## Contribuindo

Sinta-se à vontade para enviar issues ou pull requests para melhorias ou correções de bugs.

## Subir o Projeto para o GitHub

1. **Crie um novo repositório no GitHub:**
   - Vá para [GitHub](https://github.com) e crie um novo repositório.

2. **Inicialize um repositório Git localmente:**
   ```bash
   git init
   ```

3. **Adicione os arquivos ao repositório:**
   ```bash
   git add .
   ```

4. **Faça o commit das mudanças:**
   ```bash
   git commit -m "Initial commit"
   ```

5. **Adicione o repositório remoto:**
   ```bash
   git remote add origin <repository-url>
   ```

6. **Envie as mudanças para o GitHub:**
   ```bash
   git push -u origin master
   ```

Substitua `<repository-url>` pela URL do seu novo repositório no GitHub.