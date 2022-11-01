export default function auth({ next, router }) {
    if (!localStorage.getItem('loggedIn')) {
      return router.push({ name: 'login' });
    }
  
    return next();
  }