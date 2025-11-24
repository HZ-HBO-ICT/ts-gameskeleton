/**
 * Helper class for managing 2D vectors
 *
 * @version 1.0.0
 * @author Frans Blauw
 */

export default class Vector2 {
  public x: number;

  public y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Adds another Vector2 to this one.
   *
   * @param other the other Vector2 to add
   * @returns the resulting Vector2
   */
  public add(other: Vector2): Vector2 {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  /**
   * Calculates the distance to another Vector2.
   *
   * @param other the other Vector2
   * @returns the distance between this vector and the other
   */
  public distanceTo(other: Vector2): number {
    const dx: number = this.x - other.x;
    const dy: number = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Scales the vector by a given factor.
   *
   * @param factor the scale factor
   * @returns the scaled Vector2
   */
  public scale(factor: number): Vector2 {
    return new Vector2(this.x * factor, this.y * factor);
  }

  /**
   * Calculates the direction vector to another Vector2.
   *
   * @param other the other Vector2
   * @returns the direction Vector2
   */
  public directionTo(other: Vector2): Vector2 {
    const dx: number = other.x - this.x;
    const dy: number = other.y - this.y;
    const length: number = Math.sqrt(dx * dx + dy * dy);
    return new Vector2(dx / length, dy / length);
  }

  /**
   * Normalizes the vector to a unit vector.
   *
   * @returns the normalized Vector2
   */
  public normalize(): Vector2 {
    const length: number = Math.sqrt(this.x * this.x + this.y * this.y);
    if (length === 0) {
      return new Vector2(0, 0);
    }
    return new Vector2(this.x / length, this.y / length);
  }

  /**
   * Generates a random unit direction vector.
   *
   * @returns a random direction Vector2
   */
  public static randomDirection(): Vector2 {
    const angle: number = Math.random() * 2 * Math.PI;
    return new Vector2(Math.cos(angle), Math.sin(angle));
  }
}
