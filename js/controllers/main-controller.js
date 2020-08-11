angular.module('pdi').controller('MainController', function($scope) {
    
    var self = $scope;

    self.objetivos = [
        {
            titulo : "No Itaú",
            descricao : "Atuar mais na parte de desenvolvimento nos projetos"
        },
        {
            titulo : "Em desenvolvimento",
            descricao : "Me tornar um desenvolvedor front-end com foco em Angular"
        },
        {
            titulo : "Acadêmicos",
            descricao : "Concluir a formaçào em bacharelado em ciência e tecnologia"
        }
    ]
    self.pontosFortes = ["Ótima relação interpessoal", "Maturidade intelectual", "Comprometimento e responsabilidade", "Comunicação e transparência na squad"]
    self.pontosFracos = ["Participação na comunidade de tecnologia", "Comunicação ascendente", "Autopromoção",]
    self.oportunidades = ["Crescimento no Itaú", "Esperiência em desenvolvimento"]
    self.ameaças = ["Indisciplina", "Inconstância"]


    self.swot = [ 
        {
            titulo : "Pontos Fortes",
            descricao : self.pontosFortes
        },
        {
            titulo : "Pontos Fracos",
            descricao : self.pontosFracos
        },
        {
            titulo : "Oportunidades",
            descricao : self.oportunidades
        },
        {
            titulo : "Ameaças",
            descricao : self.ameaças
        },
    ]
    self.proximosPassos = [
        {
            titulo : "Em 6 meses",
            descricao : "Atuar mais na parte de desenvolvimento nos projetos"
        },
        {
            titulo : "Em 1 ano",
            descricao : "Me tornar um desenvolvedor front-end com foco em Angular"
        },
        {
            titulo : "Em 3 anos",
            descricao : "Concluir a formaçào em bacharelado em ciência e tecnologia"
        }
    ]

    self.indefinido = [
        "Desenvolver mais para pegar mais prática",
        "Finalizar cursos de typescript e angular",
        "Criar pdi em angular",
        "Dar continuidade aos projetos pessoais",
        "Focar nos estudos acadêmicos"
    ]
});