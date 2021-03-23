angular.module('pdi').controller('MainController', function($scope) {
    
    var self = $scope;

    self.objetivos = [
        {
            titulo : "No Itaú",
            descricao : ["Crescimento horizontal", "Participação ativa em projetos Mobile"]
        },
        {
            titulo : "Profissionais",
            descricao : ["Me tornar um desenvolvedor Angular front-end com foco em aplicações web e mobile."]
        },
        {
            titulo : "Acadêmicos",
            descricao : ["Concluir a formação em bacharelado em ciência e tecnologia.", "Iniciar Pós BI em Ciência da Computação"]
        }
    ]

    self.swot = [ 
        {
            titulo : "Pontos Fortes",
            descricao : ["Ótima relação interpessoal", "Maturidade intelectual", "Comprometimento e responsabilidade", "Comunicação e transparência na squad"]
        },
        {
            titulo : "Pontos Fracos",
            descricao : ["Comunicação ascendente", "Autopromoção"]
        },
        {
            titulo : "Oportunidades",
            descricao : ["Crescimento no Itaú", "Experiência em desenvolvimento"]
        },
        {
            titulo : "Ameaças",
            descricao : ["Inconstância"]
        },
    ]
    self.proximosPassos = [
        {
            titulo : "Em 6 meses",
            descricao : ["Criar PDI em Angular até 01/04/2021", "Finalizar Bacharel em ciência e tecnologia"]
        },
        {
            titulo : "Em 1 ano",
            descricao : ["Cursos de Soft Skill", "Me tornar analista pleno"]
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