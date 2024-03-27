function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/skills/skills-member.html',
    controller: 'SkillsMemberController',
    controllerAs: 'skillsMember',
    bindToController: true,
    scope: {
      member: '='
    }
  };
}
