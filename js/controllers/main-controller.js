
angular.module('pdi').controller('MainController', function($scope) {
    
    var self = $scope;

    self.dados = {
        "pdi" : {
            "objetivos" : {
                "no_itau" : [
                    "Desenvolver mais nos projetos",
                    "Conseguir fazer bem meu trabalho com autonomia",
                    "Contribuir mais e ajudar mais as pessoas",
                    "Me tornar analista pleno"
                ],
                "em_tecnologia" : [
                    "Ser mais ativo na comunidade",
                    "Me tornar um desenvolvedor front-end com foco em Angular"
                ],
                "academicos" : [
                    "Concluir a respectiva formação",
                    "Oportunidades de pós-graduação"
                ],
                "pessoais" : [
                    "Investir mais dinheiro",
                    "Comprar um carro melhor",
                    "Reduzir consumo de carne"
                ]
            },
            "pontos_fortes" : [
                "Ótima relação interpessoal",
                "Comunicação com a squad",
                "Maturidade intelectual",
                "Comprometimento e responsabilidade"
            ],
            "pontos_fracos" : [
                "Insegurança nos códigos",
                "Participação na comunidade de tecnologia",
                "Não focar em uma tecnologia/ferramenta"
            ],
            "proximos_passos" : [
                "Desenvolver mais para pegar mais prática",
                "Finalizar cursos de typescript e angular",
                "Criar pdi em angular",
                "Dar continuidade aos projetos pessoais",
                "Focar nos estudos acadêmicos"
            ]
        }
    }
});