export default function NotFound() {
    return (
        <div
            style={{
                minHeight: '100vh',
                minWidth: '100vw',
                position: 'fixed',
                top: 0,
                left: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(195deg,rgb(45, 2, 58) 0%,rgb(109, 4, 119) 100%)',
                color: '#fff',
                fontFamily: 'Arial',
                zIndex: 9999,
            }}
        >
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                letterSpacing: '1px',
                marginBottom: '1rem',
                textShadow: '0 2px 16px rgba(0,0,0,0.2)'
            }}>
                Snippet Not Found
            </h1>
            <p style={{
                fontSize: '1.25rem',
                fontWeight: 400,
                opacity: 0.95,
                textShadow: '0 1px 8px rgba(0,0,0,0.15)'
            }}>
                The snippet you are looking for does not exist.
            </p>
        </div>
    );
}