# olleh-front-v2

olleh-front-v2 is a comprehensive design system built with Tailwind CSS and Storybook, designed to empower developers and designers to build consistent and beautiful interfaces efficiently.

## Installation

Install olleh-front-v2 into your project with NPM:

```bash
npm install olleh-front-v2
```

## Usage

After installation, you must import the main CSS file in your project to access the full range of styles provided by Tailwind CSS. Add the following line to the root of your project such as `App.tsx` or `main.tsx`:

```javascript
import "olleh-front-v2/index.css";
```

And then you can import components from `olleh-front-v2` directly like below

```typescript
import { DefaultTextField, PrimaryButton } from "olleh-front-v2";

export default function LoginPage() {
  return (
    ...
      <DefaultTextField
        id="username"
        placeholder="아이디를 입력해주세요"
        onChange={handleUsernameChange}
      />
      <DefaultTextField
        id="password"
        type="password"
        placeholder="비밀번호를를 입력해주세요"
        onChange={handlePasswordChange}
      />
      <PrimaryButton onClick={() => handleLogin(username, password)}>로그인</PrimaryButton>
    ...
  );
}
```

This ensures that all olleh-front-v2 components render with the intended design specifications.

## Components

olleh-front-v2 offers a wide range of components that are ready to use in your projects. To see the components available and learn how to use them, refer to the Storybook documentation provided with the package.

## Contributing

We welcome contributions to the olleh-front-v2 project! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.

## License

olleh-front-v2 is released under the MIT License. See the LICENSE file for more details.
