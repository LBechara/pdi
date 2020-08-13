angular.module('pdi').controller('MainController', function($scope) {
    
    var self = $scope;

    self.objetivos = [
        {
            titulo : "No Itaú",
            descricao : "Atuar mais na parte de desenvolvimento nos projetos."
        },
        {
            titulo : "Em desenvolvimento",
            descricao : "Me tornar um desenvolvedor front-end com foco em aplicações web e mobile."
        },
        {
            titulo : "Acadêmicos",
            descricao : "Concluir a formação em bacharelado em ciência e tecnologia."
        }
    ]

    self.swot = [ 
        {
            titulo : "Pontos Fortes",
            descricao : ["Ótima relação interpessoal", "Maturidade intelectual", "Comprometimento e responsabilidade", "Comunicação e transparência na squad"]
        },
        {
            titulo : "Pontos Fracos",
            descricao : ["Participação na comunidade de tecnologia", "Comunicação ascendente", "Autopromoção"]
        },
        {
            titulo : "Oportunidades",
            descricao : ["Crescimento no Itaú", "Experiência em desenvolvimento"]
        },
        {
            titulo : "Ameaças",
            descricao : ["Indisciplina", "Inconstância"]
        },
    ]
    self.proximosPassos = [
        {
            titulo : "Em 6 meses",
            descricao : ["Finalizar cursos de TypeScript e Angular até 01/11/2020", "Criar PDI em angular até 01/11/2020"]
        },
        {
            titulo : "Em 1 ano",
            descricao : ["Concluir formação em Bacharel em Ciência e Tecnologia até Julho de 2021", ]
        },
        {
            titulo : "Em 3 anos",
            descricao : ["MBA em CyberSecurity ou Mobile Development na FIAP"]
        }
    ]
    self.indefinido = [
        "Desenvolver mais para pegar prática",
        "Dar continuidade aos projetos pessoais"
    ]
});