// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix.reduce(
        (accum, next, index) => [
            ...accum,
            ...(index % 2 ? next.reverse() : next),
        ],
        []
    );
};
