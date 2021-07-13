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
  --keep track of num of open sites
  --open site i
  check if site is full site
  --check if site is open site
  check if system percolates

*/
let grid = [];
let groups = [];
let size = [];
let numberOfOpenSites = 0;
let gridWidth = 10;
let gridHeight = 10;

function createGrid(width, height) {
  let group = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      grid.push({
        row: i,
        column: j,
        state: 'blocked'
      })
      groups.push(group);
      group++;
      size.push(1);
    }
  }
}

function openSite(site) {
  site.state = 'open';
  numberOfOpenSites++;
}

function checkNeighbours(site) {
  const top = (site.row-1)*width + site.column;
  const bottom = (site.row+1)*width + site.column;
  const left = site.row*width + (site.column-1);
  const right = site.row*width + (site.column+1);
  if (site.row-1 < 0 || site.row+1 > gridHeight-1 || site.column-1 < 0 || site.column+1 > gridWidth-1) {

  }
  for (let i = 0; i < 4; i++) {
    if (i === 0) {
      isOpen(neighbour[i])
    }
    if (true) {
      groups[top] = groups[site]
    }
  }
  //if (isOpen(grid[site.column]))
}


function isOpen(site) {
  if (site.state === 'open') {
    return true;
  } else {
    return false;
  }
}

function isFull(site) {
  let root = root(site);
  if (root.row === 0) {
    return true;
  } else {
    return false;
  }
}

//------------------------------------
//Weighted union-find weighted quick-union

function union(site1, site2) {
  const site1Root = root(site1);
  const site2Root = root(site2);

  groups[site1Root] = site2Root;
  if (site1 === site2) {
    return;
  }
  if (size[site1Root] < size[site2Root]) {
    groups[site1Root] = site2Root;
    size[site2Root] += size[site1Root];
  } else {
    groups[site2Root] = site1Root;
    size[site1Root] += size[site2Root];
  }
}

function connected(site1, site2) {
  return groups[site1] === groups[site2];
}

function root(site) {
  while(site !== groups[site]) {
    site = groups[site];
  }
  return site;
}

createGrid(gridWidth, gridHeight);
//openSite(grid[99]);
console.log(grid);
console.log(grid.length);
//console.log(isOpen(grid[37]));
//console.log(isOpen(grid[99]));
console.log(groups)
groups[80] = 85;
groups[82] = 90;
groups[85] = 82;
groups[90] = 93;
console.log(root(80))
