import { Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface IDButton {
	onClick: () => void;
	children?: ReactNode; // allow button label or other content
}

export const DButton = ({ onClick, children }: IDButton) => {
	return (
		<Button
			onClick={onClick}
			variant="solid"
			colorScheme="purple"
			size="md"
			width="50%"
			marginTop="5px"
		>
			{children ?? "Entrar"}
		</Button>
	);
};
