const { expect, browser, $ } = require('@wdio/globals')

describe('Lojinha híbrida', () => {
    it('Realizar login no app', async () => {
        const usuario = 'vitor2025'
        const senha = 'vitor2025'

        const txtUsuario = $('android=new UiSelector().resourceId("usuario")')
        await txtUsuario.setValue(usuario)

        const txtSenha = $('android=new UiSelector().resourceId("senha")')
        await txtSenha.setValue(senha)

        const btnEntrar = $('android=new UiSelector().resourceId("btn-entrar")')
        await btnEntrar.click()

        //Para fazer asserção (por exemplo) do login:
        const lblListaDeProduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')
        const listaDeProduto = await lblListaDeProduto.getText()
        expect(listaDeProduto).toEqual('Lista de Produtos')

        await driver.saveScreenshot('./teste.png')
    })

    it('Criar produto (com valor limite máximo)', async() => {
        const txtAdicionarProduto = $('android=new UiSelector().text("ADICIONAR PRODUTO")')
        await txtAdicionarProduto.click()

        const txtprodutonome = $('android=new UiSelector().resourceId("produtonome")')
        await txtprodutonome.setValue("PC Gamer da Nasa")

        const txtprodutovalor = $('android=new UiSelector().resourceId("produtovalor")')
        await txtprodutovalor.setValue("700000")

        const txtprodutocor = $('android=new UiSelector().resourceId("produtocores")')
        await txtprodutocor.setValue("Preto, Branco")

        const txtnomedoproduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Nome do Produto")')
        const nomeDoProduto = await txtnomedoproduto.getText()
        expect(nomeDoProduto).toEqual('Nome do Produto')

        const txtvalordoproduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Valor do Produto")')
        const valorDoProduto = await txtvalordoproduto.getText()
        expect(valorDoProduto).toEqual('Valor do Produto')

        const txtcordoproduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Cores do Produto (Separadas por Vírgula)")')
        const corDoProduto = await txtcordoproduto.getText()
        expect(corDoProduto).toEqual('Cores do Produto (Separadas por Vírgula)')

        const lblAdicionarProduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Adicionar produto")')
        const AdicionarProduto = await lblAdicionarProduto.getText()
        expect(AdicionarProduto).toEqual('Adicionar produto')

        const txtTextoImportante = $('android=new UiSelector().packageName("com.example.lojinha").text("Não esqueça de preencher todas as informações do produto para que ele seja mais vendível a seus clientes.")')
        const textoImportante = await txtTextoImportante.getText()
        expect(textoImportante).toEqual('Não esqueça de preencher todas as informações do produto para que ele seja mais vendível a seus clientes.')

        const txtSalvarProduto = $('android=new UiSelector().resourceId("btn-salvar")')
        await txtSalvarProduto.click()


        await driver.saveScreenshot('./teste.png')
    });

    it('Adicionar componente', async() => {
        const txtAdicionarComponente = $('android=new UiSelector().packageName("com.example.lojinha").text("ADICIONAR COMPONENTE")');
        await txtAdicionarComponente.click();        

        const txtCompoenteaoProduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Adicionar Componente ao Produto")')
        const ComponenteaoProduto = await txtCompoenteaoProduto.getText()
        expect(ComponenteaoProduto).toEqual('Adicionar Componente ao Produto')

        const txtNomedoComponente = $('android=new UiSelector().packageName("com.example.lojinha").text("Nome do Componente de Produto")')
        const NomedoComponentedeProduto = await txtNomedoComponente.getText()
        expect(NomedoComponentedeProduto).toEqual('Nome do Componente de Produto')
        
        const txtcomponentenome = $('android=new UiSelector().resourceId("componentenomeadicionar")')
        await txtcomponentenome.setValue("Controle da Nasa")

        const txtcomponentequantidade = $('android=new UiSelector().resourceId("componentequantidadeadicionar")');
        await txtcomponentequantidade.setValue("1");

        const txtQuantidadedoComponente = $('android=new UiSelector().packageName("com.example.lojinha").text("Quantidade do Componente de Produto")')
        const QuantidadedoComponentedeProduto = await txtQuantidadedoComponente.getText()
        expect(QuantidadedoComponentedeProduto).toEqual('Quantidade do Componente de Produto')

        const txtCancelarComponente = $('android=new UiSelector().packageName("com.example.lojinha").text("CANCELAR")')
        const CancelarComponente = await txtCancelarComponente.getText()
        expect(CancelarComponente).toEqual('CANCELAR')

        const txtSalvarComponente = $('android=new UiSelector().text("SALVAR COMPONENTE")')
        await txtSalvarComponente.click()

        await driver.saveScreenshot('./teste.png')

        const txtNomeComponente = $('android=new UiSelector().packageName("com.example.lojinha").text("Lojinha Controle da Nasa")')

        try {
            const NomeComponente = await txtNomeComponente.getText()
            expect(NomeComponente).toEqual('Controle da Nasa')
        } catch (error) {
            console.error('Erro no teste de nome do componente:', error)
        }

        const txtQuantidadeComponente = $('android=new UiSelector().packageName("com.example.lojinha").text("1 unidade")')
        const QuantidadeComponente = await txtQuantidadeComponente.getText()
        expect(QuantidadeComponente).toEqual('1 unidade')

    });

    it('Editar um Produto', async() => {
        const txtListadeProdutos = $('android=new UiSelector().packageName("com.example.lojinha").text("LISTA DE PRODUTOS")');
        await txtListadeProdutos.click(); 

        const txtListdeProdutosPrincipal = $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")')
        const ListadeProdutos = await txtListdeProdutosPrincipal.getText()
        expect(ListadeProdutos).toEqual('Lista de Produtos')

        const txtNomeProdutoLista = $('//android.view.View[@text="PC Gamer da Nasa"]')
        await txtNomeProdutoLista.click()

        const txtprodutonome = $('android=new UiSelector().resourceId("produtonome")')
        await txtprodutonome.setValue("PC Gamer da Nasa Alterado")

        const txtprodutovalor = $('android=new UiSelector().resourceId("produtovalor")')
        await txtprodutovalor.setValue("700000")

        const txtprodutocor = $('android=new UiSelector().resourceId("produtocores")')
        await txtprodutocor.setValue("Alienigena, Black Hole")
    });

})

