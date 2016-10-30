(function() {
    Navigation = function(node) {
        this.RootNode = node;
    }

    Navigation.prototype.initial = function() {
        var nodeClick = this.NodeClick;
        var rootNode =  this.RootNode;
        var children = this.RootNode.children[0].children;
        for(var i=0;i< children.length;i++) {
            children[i].onclick = function() {
                for(var i=0;i< children.length;i++) {
                    if(children[i].className.indexOf('open')>-1) {
                        children[i].className = children[i].className.replace('open','');
                    }
                }
                this.className = this.className + ' open';
            }
        }
        this.SetActive();
    }

    Navigation.prototype.NodeClick = function(n) {
        var children = this.RootNode.children[0].children;
        for(var i=0;i< children.length;i++) {
            if(children[i].className.indexOf('open')>0) {
                children[i].className = children[i].className.replace('open','');
            }
        }
        n.className = n.className + ' open';
    }

    Navigation.prototype.SetActive = function() {
        var children = this.RootNode.children[0].children;
        var url = window.location.href.toLowerCase();
        for(var i=0;i<children.length;i++) {
            if(children[i].children.length>1) {
                var subChildren = children[i].children[1].children;
                var hasSet = false;
                for(var j=0;j<subChildren.length;j++) {
                    var href=subChildren[j].children[0].attributes.getNamedItem('href').value;
                    console.log(href);
                    if(!hasSet && href.length>0 && url.indexOf(href.toLowerCase())>-1) {
                        subChildren[j].className += ' active';
                        children[i].className += ' open';
                        hasSet = true;
                    }
                    else {
                        subChildren[j].className = subChildren[i].className.replace('active','');
                        if(!hasSet)
                        children[i].className = children[i].className.replace('open','');
                    }
                }
            }
            else {

            }
        } 
    }
})();
