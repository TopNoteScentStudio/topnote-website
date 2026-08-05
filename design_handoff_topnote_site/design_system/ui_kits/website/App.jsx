function App() {
  const [page, setPage] = React.useState('home');
  const go = (item) => { setPage(item.id); window.scrollTo({ top: 0 }); };
  const screens = { home: HomeScreen, services: ServicesScreen, partners: PartnershipsScreen, about: AboutScreen, contact: ContactScreen };
  const Screen = screens[page];
  return (
    <div>
      <NavBar items={NAV} active={page} onNavigate={go} />
      <Screen onNavigate={go} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
