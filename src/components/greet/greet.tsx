export interface GreetProps {
  name?: string
}
export const Greet = ({ name = 'Hello' }: GreetProps) => {
  return <div>{name}</div>
}
