export interface InputInterface {
  read(): Promise<number | undefined>;
}

export interface DisplayInterface {
  tooLow(): void;
  tooHigh(): void;
  correct(): void;
  youLose(): void;
}

export interface NumberGeneratorInterface {
  generate(): number;
}

export class Game {
  constructor(
    private readonly generator: NumberGeneratorInterface,
    private readonly input: InputInterface,
    private readonly display: DisplayInterface,
    private readonly tries: number = 10
  ) {}

  async start() {
    const magicNumber = this.generator.generate();

    for (let i = 0; i < this.tries; i++) {
      const guess = await this.input.read();
      if (guess === undefined) {
        this.display.youLose();
        return;
      }

      if (guess < magicNumber) {
        this.display.tooLow();
      } else if (guess > magicNumber) {
        this.display.tooHigh();
      } else {
        this.display.correct();
        return;
      }
    }

    this.display.youLose();
  }
}