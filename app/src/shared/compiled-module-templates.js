var compiledModuleTemplates = {};

compiledModuleTemplates['main-view/main-view.tpl'] = '<div class="main-view">\n' +
   '    <h1>{heading}</h1>\n' +
   '    <p>{content}</p>\n' +
   '</div>';

compiledModuleTemplates['menu/menu-item.tpl'] = '<a href="#/{href}">\n' +
   '    <strong>{name}</strong>\n' +
   '</a>\n' +
   '';

compiledModuleTemplates['menu/menu.tpl'] = '<div class="menu">\n' +
   '  <h2 class="menu-header">Menu</h2>\n' +
   '  <ul></ul>\n' +
   '</div>\n' +
   '';
