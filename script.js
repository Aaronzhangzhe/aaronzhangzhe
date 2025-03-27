// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 移动端导航控制
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    
    if (hamburger && mobileMenu && backdrop) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            backdrop.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
        
        backdrop.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            this.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    }
    
    // 社区页面帖子点击事件
    const forumPosts = document.querySelectorAll('.forum-post');
    if (forumPosts.length > 0) {
        forumPosts.forEach(post => {
            post.addEventListener('click', function() {
                // 这里可以添加点击帖子后的跳转逻辑
                alert('查看帖子详情');
            });
        });
    }
    
    // 搜索图标点击事件
    const searchIcon = document.querySelector('.search-icon');
    if (searchIcon) {
        searchIcon.addEventListener('click', function() {
            alert('搜索功能即将上线！');
        });
    }

    // 按钮点击事件
    const buttons = document.querySelectorAll('button:not(.hamburger)');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.classList.contains('new-post-btn')) {
                e.stopPropagation(); // 阻止事件冒泡
                alert('create a new forum');
            } else if (this.classList.contains('btn-primary')) {
                e.preventDefault();
                alert('It will upload soon');
            } else if (this.classList.contains('btn-secondary')) {
                e.preventDefault();
                alert('it will upload soon');
            }
        });
    });

    // 简单的滚动动画
    function revealOnScroll() {
        const elements = document.querySelectorAll('.category-card, .program-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // 为卡片添加初始样式
    const cards = document.querySelectorAll('.category-card, .program-card');
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // 监听滚动事件
    window.addEventListener('scroll', revealOnScroll);
    
    // 初始检查
    revealOnScroll();
}); 