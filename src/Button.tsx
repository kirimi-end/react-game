type Props = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler
  color?: string
}

function Button(props: Props) {

  const {children, onClick, color} = props
  return (
    <button onClick={onClick} style={{background: color}}>
      {children}
    </button>
  )
}

export default Button
