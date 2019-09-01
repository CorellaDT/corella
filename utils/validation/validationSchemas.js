const newProject = {
	type: "object",
	properties: {
		name: {
			type: "string",
			required: true
		},
		columns: {
			type: "array",
			minLength: 2,
			required: true,
			items: {
				type: "object",
				properties: {
					name: {
						type: "string",
						required: true
					},
					isStarting: {
						type: "boolean",
						required: true
					},
					isClosing: {
						type: "boolean",
						required: true
					}
				}
			}
		},
		description: {
			type: "string"
		}
	}
};

const roles = {
	type: "object",
	properties: {
		name: {
			type: "string",
			required: true
		},
			isManager: {
			type: "boolean",
			required: true
		},
		isCreator: {
			type: "boolean",
			required: true
		},
		isDestroyer: {
			type: "boolean",
			required: true
		},
		isEditor: {
			type: "boolean",
			required: true
		},
		issueTransitionMatrix: {
			type: "array",
			items: {
				type: "object"
			}
		},
		members: {
			type: "array",
			items: {
				type: "string",
				format: "objectId"
			}
		}
	}
};

const newIssue = {
	type: "object",
	properties: {
		title: {
			type: "string",
			required: true
		},
		description: {
			type: "string",
			required: "true"
		},
		checklist: {
			type: "array",
			items: {
				type: "object",
				properties: {
					description: {
						type: "string",
						required: true
					},
					isDone: {
						type: "boolean",
						required: true
					}
				}
			}
		}
	}
};

const moveOperation = {
	type: 'object',
	properties: {
		originalColumn: {
			type: "string",
			format: "md5"
		},
		originalPosition: {
			type: "integer",
			minimum: 0,
			required: true
		},
		targetColumn: {
			type: "integer",
			format: "md5"
		},
		targetPosition: {
			type: "integer",
			minimum: 0,
			required: true
		}
	}
};

module.exports = {newProject, roles, newIssue, moveOperation};