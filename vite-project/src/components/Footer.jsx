
const Footer = () => {
  return (
    <div style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '1rem 0',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      boxShadow: '0 -0.5rem 1rem rgba(0, 0, 0, 0.2)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          padding: '0.5rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              fontSize: '0.9rem',
              opacity: '0.8'
            }}>
             Copyright &copy; 2024 - Websitewala - All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
