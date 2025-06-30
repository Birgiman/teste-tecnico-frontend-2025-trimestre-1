# teste-tecnico-frontend-2025-trimestre-1

Teste técnico para a posição de Frontend Dev. Edição do primeiro trimestre de 2025.

## 💡 A Proposta: Agenda de Endereços

A ideia central deste projeto é implementar uma **Agenda de Endereços** interativa no lado do cliente.

- [✅] Implementar a busca de dados de endereço utilizando um provedor gratuito (ex: ViaCEP) a partir de um **CEP**, um **nome de usuário** e um **nome de exibição de endereço**.
- [✅] Salvar os dados de endereço no **lado do cliente** com persistência.
- [✅] Exibir os contatos catalogados com opções de **filtro por usuário, cidade e estado**.
- [✅] Implementar a **busca por nome de exibição do endereço**.
- [✅] Capacidade de **edição do nome de exibição** do endereço.
- [✅] Possibilidade de **exclusão de um contato**.
- [✅] **Persistência dos dados** no lado do cliente (os contatos não somem ao reentrar no site).
- [✅] Exibição de **toast notifications** para sucesso e falha na busca de endereço.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias e bibliotecas:

* **React.js**: Framework principal para a construção da interface de usuário.
* **Vite**: Ferramenta de build rápida para desenvolvimento frontend.
* **Tailwind CSS**: Framework CSS utility-first para estilização rápida.
* **Axios**: Cliente HTTP para fazer requisições a APIs externas (como ViaCEP).
* **React Hook Form**: Biblioteca para gerenciamento de formulários com validação.
* **Zod**: Biblioteca de validação de esquemas para garantir a integridade dos dados.
* **React Toastify**: Biblioteca para exibir notificações toast.
* **Phosphor React**: Biblioteca de ícones.
* **Framer Motion**: Biblioteca para animações fluidas e interativas.
* **UUID**: Para geração de IDs únicas.
* **clsx**: Utilitário para construção condicional de `className` strings.

## 🔒 Restrições

A única limitação imposta para este teste foi o uso requerido do framework **React.js** para JavaScript. As demais bibliotecas foram escolhidas livremente com foco em produtividade.

## 📊 O que estamos avaliando

Este teste busca avaliar as seguintes competências:

1.  Capacidade de integração de sistema frontend com APIs HTTP;
2.  Domínio sobre as APIs de uso rotineiro do navegador;
3.  Capacidade de organização de código (Adendo: organize da forma que for mais familiarizado, não estamos olhando para a estrutura de pastas, mas sim para a coesão e o desacoplamento) e
4.  Domínio sobre APIs do Framework React.js e árvore DOM.

## 💬 Comentários do Desenvolvedor

📘 **Quer mais detalhes sobre o setup do ambiente?** Confira o passo a passo em:
➡️ [`SETUP.md`](./SETUP.md)

Todos os requisitos propostos no teste foram implementados e validados com sucesso, resultando em uma aplicação funcional e intuitiva para o gerenciamento de endereços. A arquitetura foi pensada para facilitar a manutenção e futuras extensões.

### ✅ Funcionalidades Implementadas:

* **Gerenciamento Completo de Contatos:** Criação, visualização detalhada, edição do nome de exibição e exclusão de contatos de endereço.
* **Busca de Endereço por CEP:** Integração com um provedor externo (ex: ViaCEP) para preenchimento automático dos dados do endereço.
* **Persistência de Dados:** Os contatos são salvos no lado do cliente, garantindo que não sejam perdidos ao recarregar ou reentrar no site.
* **Filtros Dinâmicos:** Capacidade de filtrar contatos por usuário, cidade e estado.
* **Busca por Nome de Exibição:** Funcionalidade de busca para encontrar contatos rapidamente pelo nome de exibição do endereço.
* **Notificações Toast:** Feedback visual para o usuário em operações de sucesso e falha na busca de endereço.

### 🧱 Extras Aplicados:

* **Tema Dinâmico:** Implementação de um tema `light` e `dark` para personalização da interface.
* **Animação de Troca de Tema:** Transições suaves e agradáveis visualmente ao alternar entre os temas.
* **Visualização Completa de Contato:** Uma tela dedicada para exibir todos os detalhes de um contato selecionado.

### 🚧 Dificuldades Encontradas e Melhorias Futuras:

Durante o desenvolvimento, a principal dificuldade foi garantir a **persistência dos dados no lado do cliente** de forma eficiente e a **integração fluida com a API externa** (ViaCEP), lidando com os diferentes estados de carregamento e erros.

Em relação a melhorias futuras, a **aplicação responsiva** é um ponto a ser explorado. Embora o projeto tenha sido iniciado com Tailwindo (mobile-first) para estilização se torna inviável refatorar todo o projeto para que seja possível reaplicar todos os estilos ao desktop novamente.

✔️ Projeto finalizado, funcional, testado e pronto para produção ou extensão futura.
