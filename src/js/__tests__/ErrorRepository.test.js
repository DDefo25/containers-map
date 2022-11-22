import ErrorRepository from "../ErrorRepository";

test("Получение описания ошибки", () => {
    const expecting = "Not Found";
    const repo = new ErrorRepository();
    repo.add("404", "Not Found");
    const result = repo.translate("404");
    expect(result).toBe(expecting);
});

test("Добавление ошибки в репозорий", () => {
    const expecting = new Map([
        ["404", "Not Found"],
    ]);
    const repo = new ErrorRepository();
    repo.add("404", "Not Found");
    expect(repo.repo).toEqual(expecting);
});

test("Изменение описания ошибки в репозории", () => {
    const expecting = new Map([
        ["404", "Not Found"],
    ]);
    const repo = new ErrorRepository();
    repo.add("404", "Не найдено");
    repo.replace("404", "Not Found");
    expect(repo.repo).toEqual(expecting);
});

test("Ошибка не найдена при методе translate", () => {
    const expecting = new Error("Unknown error");
    const repo = new ErrorRepository();
    const repoTranslate = () => {
        repo.translate("404");
    };
    expect(repoTranslate).toThrow(expecting);
});

test("Ошибка добавления при методе add", () => {
    const expecting = new Error("Ошибка с таким кодом уже существует");
    const repo = new ErrorRepository();
    repo.add("404", "Not Found");
    const repoAdd = () => {
        repo.add("404", "Not Found");
    };
    expect(repoAdd).toThrow(expecting);
});

test("Код ошибки не найден при методе replace", () => {
    const expecting = new Error("Ошибки с таким кодом не существует");
    const repo = new ErrorRepository();
    const repoReplace = () => {
        repo.replace("404", "Not Found");
    };
    expect(repoReplace).toThrow(expecting);
});
