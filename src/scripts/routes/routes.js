import List from '../views/pages/list';
import Detail from '../views/pages/detail';

const routes = {
  '/': List, // default page
  '/list': List,
  '/detail/:id': Detail,
};

export default routes;
