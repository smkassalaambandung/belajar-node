function samplePromise(){
  return Promise.resolve("Agung");
}

const nama = await samplePromise();
console.info(nama);