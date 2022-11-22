export default class ErrorRepository {
    constructor() {
        this.repo = new Map();
    }

    add(code, description) {
        if (!this.repo.has(code)) {
            this.repo.set(code, description);
        } else {
            throw new Error("Ошибка с таким кодом уже существует");
        }
    }

    replace(code, description) {
        if (this.repo.has(code)) {
            this.repo.set(code, description);
        } else {
            throw new Error("Ошибки с таким кодом не существует");
        }
    }

    translate(code) {
        if (this.repo.has(code)) {
            return this.repo.get(code);
        }
        throw new Error("Unknown error");
    }
}
