/*

given a grid of n by n sites
  each site is either blocked, open, or full
  a full site is a site that can be connected to an open site in the top row via a chain of neighbouring open sites
  a system percolates if there is a full site in the bottom row

Problem
  if sites are independently set to be open with probability p what is the probability that the system percolates
  when p is 0 the system does not percolate
  when p is 1 the system percolates

  when n is sufficiently large there is a threshold value p*
  when p < p* a system almost never percolates
  when p > p* a system almost always percolates
  estimate p*

Grid of nodes
  nodes can have 3 states
    blocked Site
    Open Site
    Full Open Site

  --initialize grid of blocked sites
  --open site i
  check if site is full site
  check if site is open site
    keep track of num of open sites
  check if system percolates

*/
let grid = [];
let numberOfOpenSites = 0;

function createGrid(n) {
  let row = 0;
  for (let i = 0; i < n*n; i++) {
    grid.push({
      position: (Math.floor(row)+'-'+i),
      state: 'blocked'
    })
    row += (1/n);
  }
}

function openSite(site) {
  site.state = 'open';
  numberOfOpenSites++;
}

function isOpen(site) {
  if (site.state === 'open') {
    return true;
  } else {
    return false;
  }
}

createGrid(10);
openSite(grid[99]);
console.log(grid);
console.log(grid.length);
console.log(isOpen(grid[37]));
console.log(isOpen(grid[99]));
