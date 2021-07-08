export const ActionType = {
	ADD_GUITAR: `ADD_GUITAR`,
	DELETE_GUITAR: `DELETE_GUITAR`,
	CHANGE_GUITAR_AMOUNT: `CHANGE_GUITAR_AMOUNT`,
}

export const addGuitarAction = (guitar) => ({
	type: ActionType.ADD_GUITAR,
	payload: guitar,
});

export const deleteGuitarAction = (guitarArticle) => ({
	type: ActionType.DELETE_GUITAR,
	payload: guitarArticle,
});

export const changeGuitarAmountAction = (article, direction) => ({
	type: ActionType.CHANGE_GUITAR_AMOUNT,
	payload: {article, direction},
});
