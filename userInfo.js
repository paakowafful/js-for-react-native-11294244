function createUserProfiles (originalNames, modifiedNames) {
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays should have the same length");
    }

    return originalNames.map((originalName, index) => ({
        id: index + 1,
        originalName: originalName,
        modifiedName: modifiedNames[index]
    }));
}
