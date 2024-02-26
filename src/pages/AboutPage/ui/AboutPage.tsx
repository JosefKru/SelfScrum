import { Counter } from "entities/Counter"
import { Logout } from "features/Logout"

const AboutPage = () => {
  return (
    <div>
      <p>AboutPage</p>
      <Logout />
      <br />
      <Counter />
    </div>
  )
}

export default AboutPage