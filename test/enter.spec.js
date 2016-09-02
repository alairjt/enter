describe('onEnter directive:', function () {

    var $compile;
    var $rootScope;

    beforeEach(function () {
        module('enter');
        inject(function (_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });

    it('Should call the given method on an on-enter-event', function () {
        $rootScope.test = jasmine.createSpy('test');
        var element = $compile('<input on-enter="test()"></input>')($rootScope);
        $rootScope.$digest();
        var e = $.Event("keydown");
        e.which = 13;

        element.triggerHandler(e);

        expect($rootScope.test).toHaveBeenCalled();
    });
    
    it('Should call the given command on an on-enter-event', function () {
        var scope = $rootScope.$new();
        var element = $compile('<input on-enter="count = count + 1"></input>')(scope);
        scope.$digest();
        var e = $.Event("keydown");
        e.which = 13;

        element.triggerHandler(e);

        expect(scope.count).toBe(1);
    });
    
    it('Should call the given command on an on-enter-event', function () {
        var scope = $rootScope.$new();
        var element = $compile('<input on-enter="count = count + 1"></input>')(scope);
        scope.$digest();
        var e = $.Event("keydown");
        e.which = 13;
        
        element.triggerHandler(e);
        element.triggerHandler(e);
        element.triggerHandler(e);

        expect(scope.count).toBe(3);
    });
    
    it('Should don\'t call the given command on an on-enter-event', function () {
        var scope = $rootScope.$new();
        $compile('<input on-enter="count = count + 1"></input>')(scope);
        scope.$digest();

        expect(scope.count).toBeUndefined();
    });
});