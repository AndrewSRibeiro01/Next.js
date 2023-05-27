
function Title() {
    return (
        <>
            <h1>
                {children}
            </h1>
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}</style>
        </>
    )
}

export default function HomePage() {
    return (
        <div>
            <Title>Alura Cases - Ho me</Title>
            <a href="/faq">Ir para o FAQ</a>
        </div>
    )
}