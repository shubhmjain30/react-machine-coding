import { useEffect, useRef, useState } from "react";
import "./otp-input.css";

const OtpInput = ({ length = 6, autoFocus = true }) => {
	const [otp, setOtp] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const inputRef = useRef(null);

	const handleInputChange = (value) => {
		// console.log("[OtpInput] value:::", value);
		const _sanitizedVal = value.replace(/\D/g, "");
		setOtp(_sanitizedVal);
	};

	useEffect(() => {
		if (!autoFocus) return;
		inputRef.current?.focus();
	}, [autoFocus]);

	return (
		<div className="container">
			<div className="otp-input" onClick={() => inputRef.current.focus()}>
				<input
					className="input"
					type="text"
					inputMode="numeric"
					ref={inputRef}
					maxLength={length}
					onChange={(e) => handleInputChange(e.target.value)}
					onBlur={() => setIsFocused(false)}
					onFocus={() => setIsFocused(true)}
					value={otp}
					autoComplete="one-time-code" //enables SMS OTP autofill on supported devices
					aria-label="One-time password"
				/>

				{Array.from({ length }).map((_, index) => {
					const isActive =
						isFocused &&
						otp.length < length &&
						index === otp.length;

					return (
						<div
							className={`otp-input-box ${isActive ? "active" : ""}`}
							key={index}
						>
							{otp[index] ?? ""}

							{isActive && <span className="caret" />}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default OtpInput;
