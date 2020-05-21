class Device {
  private $size;
  private $capacity;

  public function phone() {
    $this -> size = ‘5.5”’;
    $this -> capacity = ‘128Gb’;
    return [$this -> getSize(), $this -> getCapacity()];
  }

  public function laptop() {
    $this -> size = ‘13”’;
    $this -> capacity = ‘256Gb’;
    return [$this -> getSize(), $this -> getCapacity()];
  }

  public function camera() {
    $this -> capacity = ‘1Gb’;
    return [$this -> capacity()];
  }
}
