const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/privacy-policy"],
    exact: true,
    component: "PrivacyPolicy",
  },
  {
    path: ["/terms-of-service"],
    exact: true,
    component: "TermsOfService",
  },
];

export default routes;
