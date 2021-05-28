var plg_system_topofthepage_class = new Class({
    Implements: [Options],
    options: {
        buttontext:false,
        topalways:false,
        styles:false,
        scrollspy:200,
        opacity:1,
        smoothscroll:false
    },
    initialize: function(options) { 
        options.opacity = (options.opacity <= 100 && options.opacity > 0)?options.opacity/100:1;
        this.setOptions(options);
        if(options.topalways) window.scrollTo(0,0);
        this.createTargetAnchor();
        this.createButton();
        this.scrollSpy();
        if(options.smoothscroll) this.smoothScroll();
    },
    createTargetAnchor:function() {
        var target = new Element('a',{
            id:'topofthepage',
            html:'&#xA0;',
            styles:{
                'height':0,
                'width':0,
                'line-height':0,
                'display':'block',
                'font-size':0,
                'overflow':'hidden',
                'position':'absolute',
                'top':0,
                'left':0
            }
        });
        target.setAttribute('name','topofthepage');
        target.inject(document.body,'top');
    },
    createButton:function(){  
        var self = this;
        if(self.options.styles.left == 'center') {
            Object.erase(self.options.styles,'left');
            var center = true;
        }
        var href = '#topofthepage';
        var base = $$('base');
        if(base.length) {
            var uri = new URI(base[0].getAttribute('href'));
            uri.set('fragment','topofthepage');
            href = uri.toURI();
        }
        var pageuri = new URI(window.location);
        if(pageuri.get('query').length) {
            pageuri.set('fragment','topofthepage');
            href = pageuri.toURI();
        }
        var gototop = new Element('a',{
            'id':'gototop',
            'href':href,
            'styles':self.options.styles
        }).inject(document.body,'bottom');
        if(self.options.buttontext != false) {
            gototop.set('html',self.options.buttontext);
        }
        if(center) {
            var page = window.getScrollSize().x/2;
            var buttonsize = gototop.measure(function(){
                return this.getSize();
            });
            gototop.setStyle('left',(page-(buttonsize.x/2)));
        }
    },
    scrollSpy:function(){
        var self = this;
        var scrollspy = new ScrollSpy({
            min:self.options.scrollspy,
            container: window,
            onEnter: function(position,enters) {
                document.id('gototop').tween('opacity',self.options.opacity);
            },
            onLeave: function(position,leaves) {
                document.id('gototop').tween('opacity',0);
            }
        });
    },
    smoothScroll:function(){
        var self = this;
        var smoothscroll = new SmoothScroll(self.options.smoothscroll);
    }
});
window.addEvent('domready',function(){
    var totp = new plg_system_topofthepage_class(window.plg_system_topofthepage_options);
});