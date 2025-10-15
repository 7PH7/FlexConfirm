export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">🎮 FlexConfirm</h1>
      <p className="text-gray-500 mb-6">marque partidas, confirme presença e vamo zoar</p>
      <a href="/auth/login" className="px-4 py-2 rounded bg-blue-600 text-white">
        Entrar
      </a>
    </main>
  )
}