export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "200px", background: "#eee" }}>
        <ul>
          <li>
            <a href="/dashboard">Inicio</a>
          </li>
          <li>
            <a href="/dashboard/clients">Clientes</a>
          </li>
        </ul>
      </aside>
      <main style={{ padding: "20px", flexGrow: 1 }}>{children}</main>
    </div>
  );
}
