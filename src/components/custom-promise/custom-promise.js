const PROMISE_STATE = {
	FULFILLED: "fulfilled",
	PENDING: "pending",
	REJECTED: "rejected",
};

class CustPromise {
	#value = "";
	#state = PROMISE_STATE.PENDING;
	#thenCallbacks = [];
	#catchCallbacks = [];

	constructor(callback) {
		try {
			callback(this.#onResolve, this.#onReject);
		} catch (err) {
			this.#onReject(err);
		}
	}

	#runCallbacks = () => {
		queueMicrotask(() => {
			if (this.#state === PROMISE_STATE.FULFILLED) {
				this.#thenCallbacks.forEach((callback) => {
					callback(this.#value);
				});

				this.#thenCallbacks = [];
			}

			if (this.#state === PROMISE_STATE.REJECTED) {
				this.#catchCallbacks.forEach((callback) => {
					callback(this.#value);
				});

				this.#catchCallbacks = [];
			}
		});
	};

	#onResolve = (value) => {
		if (this.#state !== PROMISE_STATE.PENDING) return;
		this.#value = value;
		this.#state = PROMISE_STATE.FULFILLED;

		this.#runCallbacks();
	};

	#onReject = (value) => {
		if (this.#state !== PROMISE_STATE.PENDING) return;
		this.#value = value;
		this.#state = PROMISE_STATE.REJECTED;

		this.#runCallbacks();
	};

	then = (onFulfilled, onRejected) => {
		return new CustPromise((resolve, reject) => {
			const handleFulfilled = (value) => {
				try {
					if (onFulfilled) {
						const result = onFulfilled(value);
						resolve(result); // whatever you returned becomes the new promise's value
					} else {
						resolve(value); // no handler? pass the value through untouched
					}
				} catch (err) {
					reject(err); // callback threw? new promise rejects with it
				}
			};

			const handleRejected = (err) => {
				try {
					if (onRejected) {
						const result = onRejected(err);
						resolve(result); // catch handled it -> new promise FULFILLS (this is the surprising one)
					} else {
						reject(err); // no handler? propagate the rejection down the chain
					}
				} catch (e) {
					reject(e);
				}
			};

			this.#thenCallbacks.push(handleFulfilled);
			this.#catchCallbacks.push(handleRejected);
			this.#runCallbacks();
		});
	};

	catch = (onRejected) => {
		return this.then(undefined, onRejected);
	};
}

const custPromise = new CustPromise(function (resolve) {
	setTimeout(() => {
		resolve(5);
	}, 5000);
});
// const custPromise = new CustPromise(function (_, reject) {
// 	reject(5);
// });

custPromise
	.then((x) => x * 2)
	.then((y) => console.log("Data::::", y))
	// .then((y) => {
	// 	throw new Error("boom " + y);
	// })
	.catch((err) => console.log("caught:", err));
// .then(() => console.log("still chaining after catch"));
