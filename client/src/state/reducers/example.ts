//

export default (state = '', action) => {
	switch (action.type) {
		case "example/message":
			return "example reducer is working";
			break;
		default:
			return state;
			break;
	}
};
