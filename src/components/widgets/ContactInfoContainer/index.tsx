const ContactInfoContainer = ({
  style,
  children,
}: {
  style: string
  children?: React.ReactNode
}) => {
  return <div className={`fixed w-10 h-auto ${style}`}>{children}</div>
}

export default ContactInfoContainer
